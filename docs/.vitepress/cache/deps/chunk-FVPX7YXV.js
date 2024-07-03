import {
  CompoundPath_default,
  DEFAULT_FONT,
  DEFAULT_FONT_FAMILY,
  DEFAULT_PATH_STYLE,
  Image_default,
  PathProxy_default,
  Path_default,
  TEXT_ALIGN_TO_ANCHOR,
  TSpan_default,
  adjustTextY,
  assert,
  clone,
  copyTransform,
  createCubicEasingFunc,
  createOrUpdateImage,
  each,
  encodeBase64,
  encodeHTML,
  extend,
  filter,
  getElementSSRData,
  getIdURL,
  getLineDash,
  getLineHeight,
  getMatrixStr,
  getPathPrecision,
  getSRTTransformString,
  getShadowKey,
  getSize,
  hasSeparateFont,
  hasShadow,
  isAroundZero,
  isArray,
  isFunction,
  isGradient,
  isImagePattern,
  isLinearGradient,
  isNumber,
  isObject,
  isPattern,
  isRadialGradient,
  isString,
  keys,
  liftColor,
  logError,
  map,
  noop,
  normalizeColor,
  parseFontSize,
  retrieve2,
  round4
} from "./chunk-ESTDIZVI.js";

// ../node_modules/zrender/lib/svg/SVGPathRebuilder.js
var mathSin = Math.sin;
var mathCos = Math.cos;
var PI = Math.PI;
var PI2 = Math.PI * 2;
var degree = 180 / PI;
var SVGPathRebuilder = function() {
  function SVGPathRebuilder2() {
  }
  SVGPathRebuilder2.prototype.reset = function(precision) {
    this._start = true;
    this._d = [];
    this._str = "";
    this._p = Math.pow(10, precision || 4);
  };
  SVGPathRebuilder2.prototype.moveTo = function(x, y) {
    this._add("M", x, y);
  };
  SVGPathRebuilder2.prototype.lineTo = function(x, y) {
    this._add("L", x, y);
  };
  SVGPathRebuilder2.prototype.bezierCurveTo = function(x, y, x2, y2, x3, y3) {
    this._add("C", x, y, x2, y2, x3, y3);
  };
  SVGPathRebuilder2.prototype.quadraticCurveTo = function(x, y, x2, y2) {
    this._add("Q", x, y, x2, y2);
  };
  SVGPathRebuilder2.prototype.arc = function(cx, cy, r, startAngle, endAngle, anticlockwise) {
    this.ellipse(cx, cy, r, r, 0, startAngle, endAngle, anticlockwise);
  };
  SVGPathRebuilder2.prototype.ellipse = function(cx, cy, rx, ry, psi, startAngle, endAngle, anticlockwise) {
    var dTheta = endAngle - startAngle;
    var clockwise = !anticlockwise;
    var dThetaPositive = Math.abs(dTheta);
    var isCircle = isAroundZero(dThetaPositive - PI2) || (clockwise ? dTheta >= PI2 : -dTheta >= PI2);
    var unifiedTheta = dTheta > 0 ? dTheta % PI2 : dTheta % PI2 + PI2;
    var large = false;
    if (isCircle) {
      large = true;
    } else if (isAroundZero(dThetaPositive)) {
      large = false;
    } else {
      large = unifiedTheta >= PI === !!clockwise;
    }
    var x0 = cx + rx * mathCos(startAngle);
    var y0 = cy + ry * mathSin(startAngle);
    if (this._start) {
      this._add("M", x0, y0);
    }
    var xRot = Math.round(psi * degree);
    if (isCircle) {
      var p = 1 / this._p;
      var dTheta_1 = (clockwise ? 1 : -1) * (PI2 - p);
      this._add("A", rx, ry, xRot, 1, +clockwise, cx + rx * mathCos(startAngle + dTheta_1), cy + ry * mathSin(startAngle + dTheta_1));
      if (p > 0.01) {
        this._add("A", rx, ry, xRot, 0, +clockwise, x0, y0);
      }
    } else {
      var x = cx + rx * mathCos(endAngle);
      var y = cy + ry * mathSin(endAngle);
      this._add("A", rx, ry, xRot, +large, +clockwise, x, y);
    }
  };
  SVGPathRebuilder2.prototype.rect = function(x, y, w, h) {
    this._add("M", x, y);
    this._add("l", w, 0);
    this._add("l", 0, h);
    this._add("l", -w, 0);
    this._add("Z");
  };
  SVGPathRebuilder2.prototype.closePath = function() {
    if (this._d.length > 0) {
      this._add("Z");
    }
  };
  SVGPathRebuilder2.prototype._add = function(cmd, a, b, c, d, e, f, g, h) {
    var vals = [];
    var p = this._p;
    for (var i = 1; i < arguments.length; i++) {
      var val = arguments[i];
      if (isNaN(val)) {
        this._invalid = true;
        return;
      }
      vals.push(Math.round(val * p) / p);
    }
    this._d.push(cmd + vals.join(" "));
    this._start = cmd === "Z";
  };
  SVGPathRebuilder2.prototype.generateStr = function() {
    this._str = this._invalid ? "" : this._d.join("");
    this._d = [];
  };
  SVGPathRebuilder2.prototype.getStr = function() {
    return this._str;
  };
  return SVGPathRebuilder2;
}();
var SVGPathRebuilder_default = SVGPathRebuilder;

// ../node_modules/zrender/lib/svg/mapStyleToAttrs.js
var NONE = "none";
var mathRound = Math.round;
function pathHasFill(style) {
  var fill = style.fill;
  return fill != null && fill !== NONE;
}
function pathHasStroke(style) {
  var stroke = style.stroke;
  return stroke != null && stroke !== NONE;
}
var strokeProps = ["lineCap", "miterLimit", "lineJoin"];
var svgStrokeProps = map(strokeProps, function(prop) {
  return "stroke-" + prop.toLowerCase();
});
function mapStyleToAttrs(updateAttr, style, el, forceUpdate) {
  var opacity = style.opacity == null ? 1 : style.opacity;
  if (el instanceof Image_default) {
    updateAttr("opacity", opacity);
    return;
  }
  if (pathHasFill(style)) {
    var fill = normalizeColor(style.fill);
    updateAttr("fill", fill.color);
    var fillOpacity = style.fillOpacity != null ? style.fillOpacity * fill.opacity * opacity : fill.opacity * opacity;
    if (forceUpdate || fillOpacity < 1) {
      updateAttr("fill-opacity", fillOpacity);
    }
  } else {
    updateAttr("fill", NONE);
  }
  if (pathHasStroke(style)) {
    var stroke = normalizeColor(style.stroke);
    updateAttr("stroke", stroke.color);
    var strokeScale = style.strokeNoScale ? el.getLineScale() : 1;
    var strokeWidth = strokeScale ? (style.lineWidth || 0) / strokeScale : 0;
    var strokeOpacity = style.strokeOpacity != null ? style.strokeOpacity * stroke.opacity * opacity : stroke.opacity * opacity;
    var strokeFirst = style.strokeFirst;
    if (forceUpdate || strokeWidth !== 1) {
      updateAttr("stroke-width", strokeWidth);
    }
    if (forceUpdate || strokeFirst) {
      updateAttr("paint-order", strokeFirst ? "stroke" : "fill");
    }
    if (forceUpdate || strokeOpacity < 1) {
      updateAttr("stroke-opacity", strokeOpacity);
    }
    if (style.lineDash) {
      var _a = getLineDash(el), lineDash = _a[0], lineDashOffset = _a[1];
      if (lineDash) {
        lineDashOffset = mathRound(lineDashOffset || 0);
        updateAttr("stroke-dasharray", lineDash.join(","));
        if (lineDashOffset || forceUpdate) {
          updateAttr("stroke-dashoffset", lineDashOffset);
        }
      }
    } else if (forceUpdate) {
      updateAttr("stroke-dasharray", NONE);
    }
    for (var i = 0; i < strokeProps.length; i++) {
      var propName = strokeProps[i];
      if (forceUpdate || style[propName] !== DEFAULT_PATH_STYLE[propName]) {
        var val = style[propName] || DEFAULT_PATH_STYLE[propName];
        val && updateAttr(svgStrokeProps[i], val);
      }
    }
  } else if (forceUpdate) {
    updateAttr("stroke", NONE);
  }
}

// ../node_modules/zrender/lib/svg/core.js
var SVGNS = "http://www.w3.org/2000/svg";
var XLINKNS = "http://www.w3.org/1999/xlink";
var XMLNS = "http://www.w3.org/2000/xmlns/";
var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
var META_DATA_PREFIX = "ecmeta_";
function createElement(name) {
  return document.createElementNS(SVGNS, name);
}
function createVNode(tag, key, attrs, children, text) {
  return {
    tag,
    attrs: attrs || {},
    children,
    text,
    key
  };
}
function createElementOpen(name, attrs) {
  var attrsStr = [];
  if (attrs) {
    for (var key in attrs) {
      var val = attrs[key];
      var part = key;
      if (val === false) {
        continue;
      } else if (val !== true && val != null) {
        part += '="' + val + '"';
      }
      attrsStr.push(part);
    }
  }
  return "<" + name + " " + attrsStr.join(" ") + ">";
}
function createElementClose(name) {
  return "</" + name + ">";
}
function vNodeToString(el, opts) {
  opts = opts || {};
  var S = opts.newline ? "\n" : "";
  function convertElToString(el2) {
    var children = el2.children, tag = el2.tag, attrs = el2.attrs, text = el2.text;
    return createElementOpen(tag, attrs) + (tag !== "style" ? encodeHTML(text) : text || "") + (children ? "" + S + map(children, function(child) {
      return convertElToString(child);
    }).join(S) + S : "") + createElementClose(tag);
  }
  return convertElToString(el);
}
function getCssString(selectorNodes, animationNodes, opts) {
  opts = opts || {};
  var S = opts.newline ? "\n" : "";
  var bracketBegin = " {" + S;
  var bracketEnd = S + "}";
  var selectors = map(keys(selectorNodes), function(className) {
    return className + bracketBegin + map(keys(selectorNodes[className]), function(attrName) {
      return attrName + ":" + selectorNodes[className][attrName] + ";";
    }).join(S) + bracketEnd;
  }).join(S);
  var animations = map(keys(animationNodes), function(animationName) {
    return "@keyframes " + animationName + bracketBegin + map(keys(animationNodes[animationName]), function(percent) {
      return percent + bracketBegin + map(keys(animationNodes[animationName][percent]), function(attrName) {
        var val = animationNodes[animationName][percent][attrName];
        if (attrName === "d") {
          val = 'path("' + val + '")';
        }
        return attrName + ":" + val + ";";
      }).join(S) + bracketEnd;
    }).join(S) + bracketEnd;
  }).join(S);
  if (!selectors && !animations) {
    return "";
  }
  return ["<![CDATA[", selectors, animations, "]]>"].join(S);
}
function createBrushScope(zrId) {
  return {
    zrId,
    shadowCache: {},
    patternCache: {},
    gradientCache: {},
    clipPathCache: {},
    defs: {},
    cssNodes: {},
    cssAnims: {},
    cssStyleCache: {},
    cssAnimIdx: 0,
    shadowIdx: 0,
    gradientIdx: 0,
    patternIdx: 0,
    clipPathIdx: 0
  };
}
function createSVGVNode(width, height, children, useViewBox) {
  return createVNode("svg", "root", {
    "width": width,
    "height": height,
    "xmlns": SVGNS,
    "xmlns:xlink": XLINKNS,
    "version": "1.1",
    "baseProfile": "full",
    "viewBox": useViewBox ? "0 0 " + width + " " + height : false
  }, children);
}

// ../node_modules/zrender/lib/svg/cssClassId.js
var cssClassIdx = 0;
function getClassId() {
  return cssClassIdx++;
}

// ../node_modules/zrender/lib/svg/cssAnimation.js
var EASING_MAP = {
  cubicIn: "0.32,0,0.67,0",
  cubicOut: "0.33,1,0.68,1",
  cubicInOut: "0.65,0,0.35,1",
  quadraticIn: "0.11,0,0.5,0",
  quadraticOut: "0.5,1,0.89,1",
  quadraticInOut: "0.45,0,0.55,1",
  quarticIn: "0.5,0,0.75,0",
  quarticOut: "0.25,1,0.5,1",
  quarticInOut: "0.76,0,0.24,1",
  quinticIn: "0.64,0,0.78,0",
  quinticOut: "0.22,1,0.36,1",
  quinticInOut: "0.83,0,0.17,1",
  sinusoidalIn: "0.12,0,0.39,0",
  sinusoidalOut: "0.61,1,0.88,1",
  sinusoidalInOut: "0.37,0,0.63,1",
  exponentialIn: "0.7,0,0.84,0",
  exponentialOut: "0.16,1,0.3,1",
  exponentialInOut: "0.87,0,0.13,1",
  circularIn: "0.55,0,1,0.45",
  circularOut: "0,0.55,0.45,1",
  circularInOut: "0.85,0,0.15,1"
};
var transformOriginKey = "transform-origin";
function buildPathString(el, kfShape, path) {
  var shape = extend({}, el.shape);
  extend(shape, kfShape);
  el.buildPath(path, shape);
  var svgPathBuilder = new SVGPathRebuilder_default();
  svgPathBuilder.reset(getPathPrecision(el));
  path.rebuildPath(svgPathBuilder, 1);
  svgPathBuilder.generateStr();
  return svgPathBuilder.getStr();
}
function setTransformOrigin(target, transform) {
  var originX = transform.originX, originY = transform.originY;
  if (originX || originY) {
    target[transformOriginKey] = originX + "px " + originY + "px";
  }
}
var ANIMATE_STYLE_MAP = {
  fill: "fill",
  opacity: "opacity",
  lineWidth: "stroke-width",
  lineDashOffset: "stroke-dashoffset"
};
function addAnimation(cssAnim, scope) {
  var animationName = scope.zrId + "-ani-" + scope.cssAnimIdx++;
  scope.cssAnims[animationName] = cssAnim;
  return animationName;
}
function createCompoundPathCSSAnimation(el, attrs, scope) {
  var paths = el.shape.paths;
  var composedAnim = {};
  var cssAnimationCfg;
  var cssAnimationName;
  each(paths, function(path) {
    var subScope = createBrushScope(scope.zrId);
    subScope.animation = true;
    createCSSAnimation(path, {}, subScope, true);
    var cssAnims = subScope.cssAnims;
    var cssNodes = subScope.cssNodes;
    var animNames = keys(cssAnims);
    var len = animNames.length;
    if (!len) {
      return;
    }
    cssAnimationName = animNames[len - 1];
    var lastAnim = cssAnims[cssAnimationName];
    for (var percent in lastAnim) {
      var kf = lastAnim[percent];
      composedAnim[percent] = composedAnim[percent] || { d: "" };
      composedAnim[percent].d += kf.d || "";
    }
    for (var className in cssNodes) {
      var val = cssNodes[className].animation;
      if (val.indexOf(cssAnimationName) >= 0) {
        cssAnimationCfg = val;
      }
    }
  });
  if (!cssAnimationCfg) {
    return;
  }
  attrs.d = false;
  var animationName = addAnimation(composedAnim, scope);
  return cssAnimationCfg.replace(cssAnimationName, animationName);
}
function getEasingFunc(easing) {
  return isString(easing) ? EASING_MAP[easing] ? "cubic-bezier(" + EASING_MAP[easing] + ")" : createCubicEasingFunc(easing) ? easing : "" : "";
}
function createCSSAnimation(el, attrs, scope, onlyShape) {
  var animators = el.animators;
  var len = animators.length;
  var cssAnimations = [];
  if (el instanceof CompoundPath_default) {
    var animationCfg = createCompoundPathCSSAnimation(el, attrs, scope);
    if (animationCfg) {
      cssAnimations.push(animationCfg);
    } else if (!len) {
      return;
    }
  } else if (!len) {
    return;
  }
  var groupAnimators = {};
  for (var i = 0; i < len; i++) {
    var animator = animators[i];
    var cfgArr = [animator.getMaxTime() / 1e3 + "s"];
    var easing = getEasingFunc(animator.getClip().easing);
    var delay = animator.getDelay();
    if (easing) {
      cfgArr.push(easing);
    } else {
      cfgArr.push("linear");
    }
    if (delay) {
      cfgArr.push(delay / 1e3 + "s");
    }
    if (animator.getLoop()) {
      cfgArr.push("infinite");
    }
    var cfg = cfgArr.join(" ");
    groupAnimators[cfg] = groupAnimators[cfg] || [cfg, []];
    groupAnimators[cfg][1].push(animator);
  }
  function createSingleCSSAnimation(groupAnimator) {
    var animators2 = groupAnimator[1];
    var len2 = animators2.length;
    var transformKfs = {};
    var shapeKfs = {};
    var finalKfs = {};
    var animationTimingFunctionAttrName = "animation-timing-function";
    function saveAnimatorTrackToCssKfs(animator3, cssKfs, toCssAttrName) {
      var tracks = animator3.getTracks();
      var maxTime = animator3.getMaxTime();
      for (var k = 0; k < tracks.length; k++) {
        var track = tracks[k];
        if (track.needsAnimate()) {
          var kfs = track.keyframes;
          var attrName = track.propName;
          toCssAttrName && (attrName = toCssAttrName(attrName));
          if (attrName) {
            for (var i3 = 0; i3 < kfs.length; i3++) {
              var kf = kfs[i3];
              var percent2 = Math.round(kf.time / maxTime * 100) + "%";
              var kfEasing = getEasingFunc(kf.easing);
              var rawValue = kf.rawValue;
              if (isString(rawValue) || isNumber(rawValue)) {
                cssKfs[percent2] = cssKfs[percent2] || {};
                cssKfs[percent2][attrName] = kf.rawValue;
                if (kfEasing) {
                  cssKfs[percent2][animationTimingFunctionAttrName] = kfEasing;
                }
              }
            }
          }
        }
      }
    }
    for (var i2 = 0; i2 < len2; i2++) {
      var animator2 = animators2[i2];
      var targetProp = animator2.targetName;
      if (!targetProp) {
        !onlyShape && saveAnimatorTrackToCssKfs(animator2, transformKfs);
      } else if (targetProp === "shape") {
        saveAnimatorTrackToCssKfs(animator2, shapeKfs);
      }
    }
    for (var percent in transformKfs) {
      var transform = {};
      copyTransform(transform, el);
      extend(transform, transformKfs[percent]);
      var str = getSRTTransformString(transform);
      var timingFunction = transformKfs[percent][animationTimingFunctionAttrName];
      finalKfs[percent] = str ? {
        transform: str
      } : {};
      setTransformOrigin(finalKfs[percent], transform);
      if (timingFunction) {
        finalKfs[percent][animationTimingFunctionAttrName] = timingFunction;
      }
    }
    ;
    var path;
    var canAnimateShape = true;
    for (var percent in shapeKfs) {
      finalKfs[percent] = finalKfs[percent] || {};
      var isFirst = !path;
      var timingFunction = shapeKfs[percent][animationTimingFunctionAttrName];
      if (isFirst) {
        path = new PathProxy_default();
      }
      var len_1 = path.len();
      path.reset();
      finalKfs[percent].d = buildPathString(el, shapeKfs[percent], path);
      var newLen = path.len();
      if (!isFirst && len_1 !== newLen) {
        canAnimateShape = false;
        break;
      }
      if (timingFunction) {
        finalKfs[percent][animationTimingFunctionAttrName] = timingFunction;
      }
    }
    ;
    if (!canAnimateShape) {
      for (var percent in finalKfs) {
        delete finalKfs[percent].d;
      }
    }
    if (!onlyShape) {
      for (var i2 = 0; i2 < len2; i2++) {
        var animator2 = animators2[i2];
        var targetProp = animator2.targetName;
        if (targetProp === "style") {
          saveAnimatorTrackToCssKfs(animator2, finalKfs, function(propName) {
            return ANIMATE_STYLE_MAP[propName];
          });
        }
      }
    }
    var percents = keys(finalKfs);
    var allTransformOriginSame = true;
    var transformOrigin;
    for (var i2 = 1; i2 < percents.length; i2++) {
      var p0 = percents[i2 - 1];
      var p1 = percents[i2];
      if (finalKfs[p0][transformOriginKey] !== finalKfs[p1][transformOriginKey]) {
        allTransformOriginSame = false;
        break;
      }
      transformOrigin = finalKfs[p0][transformOriginKey];
    }
    if (allTransformOriginSame && transformOrigin) {
      for (var percent in finalKfs) {
        if (finalKfs[percent][transformOriginKey]) {
          delete finalKfs[percent][transformOriginKey];
        }
      }
      attrs[transformOriginKey] = transformOrigin;
    }
    if (filter(percents, function(percent2) {
      return keys(finalKfs[percent2]).length > 0;
    }).length) {
      var animationName = addAnimation(finalKfs, scope);
      return animationName + " " + groupAnimator[0] + " both";
    }
  }
  for (var key in groupAnimators) {
    var animationCfg = createSingleCSSAnimation(groupAnimators[key]);
    if (animationCfg) {
      cssAnimations.push(animationCfg);
    }
  }
  if (cssAnimations.length) {
    var className = scope.zrId + "-cls-" + getClassId();
    scope.cssNodes["." + className] = {
      animation: cssAnimations.join(",")
    };
    attrs["class"] = className;
  }
}

// ../node_modules/zrender/lib/svg/cssEmphasis.js
function createCSSEmphasis(el, attrs, scope) {
  if (!el.ignore) {
    if (el.isSilent()) {
      var style = {
        "pointer-events": "none"
      };
      setClassAttribute(style, attrs, scope, true);
    } else {
      var emphasisStyle = el.states.emphasis && el.states.emphasis.style ? el.states.emphasis.style : {};
      var fill = emphasisStyle.fill;
      if (!fill) {
        var normalFill = el.style && el.style.fill;
        var selectFill = el.states.select && el.states.select.style && el.states.select.style.fill;
        var fromFill = el.currentStates.indexOf("select") >= 0 ? selectFill || normalFill : normalFill;
        if (fromFill) {
          fill = liftColor(fromFill);
        }
      }
      var lineWidth = emphasisStyle.lineWidth;
      if (lineWidth) {
        var scaleX = !emphasisStyle.strokeNoScale && el.transform ? el.transform[0] : 1;
        lineWidth = lineWidth / scaleX;
      }
      var style = {
        cursor: "pointer"
      };
      if (fill) {
        style.fill = fill;
      }
      if (emphasisStyle.stroke) {
        style.stroke = emphasisStyle.stroke;
      }
      if (lineWidth) {
        style["stroke-width"] = lineWidth;
      }
      setClassAttribute(style, attrs, scope, true);
    }
  }
}
function setClassAttribute(style, attrs, scope, withHover) {
  var styleKey = JSON.stringify(style);
  var className = scope.cssStyleCache[styleKey];
  if (!className) {
    className = scope.zrId + "-cls-" + getClassId();
    scope.cssStyleCache[styleKey] = className;
    scope.cssNodes["." + className + (withHover ? ":hover" : "")] = style;
  }
  attrs["class"] = attrs["class"] ? attrs["class"] + " " + className : className;
}

// ../node_modules/zrender/lib/svg/graphic.js
var round = Math.round;
function isImageLike(val) {
  return val && isString(val.src);
}
function isCanvasLike(val) {
  return val && isFunction(val.toDataURL);
}
function setStyleAttrs(attrs, style, el, scope) {
  mapStyleToAttrs(function(key, val) {
    var isFillStroke = key === "fill" || key === "stroke";
    if (isFillStroke && isGradient(val)) {
      setGradient(style, attrs, key, scope);
    } else if (isFillStroke && isPattern(val)) {
      setPattern(el, attrs, key, scope);
    } else if (isFillStroke && val === "none") {
      attrs[key] = "transparent";
    } else {
      attrs[key] = val;
    }
  }, style, el, false);
  setShadow(el, attrs, scope);
}
function setMetaData(attrs, el) {
  var metaData = getElementSSRData(el);
  if (metaData) {
    metaData.each(function(val, key) {
      val != null && (attrs[(META_DATA_PREFIX + key).toLowerCase()] = val + "");
    });
    if (el.isSilent()) {
      attrs[META_DATA_PREFIX + "silent"] = "true";
    }
  }
}
function noRotateScale(m) {
  return isAroundZero(m[0] - 1) && isAroundZero(m[1]) && isAroundZero(m[2]) && isAroundZero(m[3] - 1);
}
function noTranslate(m) {
  return isAroundZero(m[4]) && isAroundZero(m[5]);
}
function setTransform(attrs, m, compress) {
  if (m && !(noTranslate(m) && noRotateScale(m))) {
    var mul = compress ? 10 : 1e4;
    attrs.transform = noRotateScale(m) ? "translate(" + round(m[4] * mul) / mul + " " + round(m[5] * mul) / mul + ")" : getMatrixStr(m);
  }
}
function convertPolyShape(shape, attrs, mul) {
  var points = shape.points;
  var strArr = [];
  for (var i = 0; i < points.length; i++) {
    strArr.push(round(points[i][0] * mul) / mul);
    strArr.push(round(points[i][1] * mul) / mul);
  }
  attrs.points = strArr.join(" ");
}
function validatePolyShape(shape) {
  return !shape.smooth;
}
function createAttrsConvert(desc) {
  var normalizedDesc = map(desc, function(item) {
    return typeof item === "string" ? [item, item] : item;
  });
  return function(shape, attrs, mul) {
    for (var i = 0; i < normalizedDesc.length; i++) {
      var item = normalizedDesc[i];
      var val = shape[item[0]];
      if (val != null) {
        attrs[item[1]] = round(val * mul) / mul;
      }
    }
  };
}
var builtinShapesDef = {
  circle: [createAttrsConvert(["cx", "cy", "r"])],
  polyline: [convertPolyShape, validatePolyShape],
  polygon: [convertPolyShape, validatePolyShape]
};
function hasShapeAnimation(el) {
  var animators = el.animators;
  for (var i = 0; i < animators.length; i++) {
    if (animators[i].targetName === "shape") {
      return true;
    }
  }
  return false;
}
function brushSVGPath(el, scope) {
  var style = el.style;
  var shape = el.shape;
  var builtinShpDef = builtinShapesDef[el.type];
  var attrs = {};
  var needsAnimate = scope.animation;
  var svgElType = "path";
  var strokePercent = el.style.strokePercent;
  var precision = scope.compress && getPathPrecision(el) || 4;
  if (builtinShpDef && !scope.willUpdate && !(builtinShpDef[1] && !builtinShpDef[1](shape)) && !(needsAnimate && hasShapeAnimation(el)) && !(strokePercent < 1)) {
    svgElType = el.type;
    var mul = Math.pow(10, precision);
    builtinShpDef[0](shape, attrs, mul);
  } else {
    var needBuildPath = !el.path || el.shapeChanged();
    if (!el.path) {
      el.createPathProxy();
    }
    var path = el.path;
    if (needBuildPath) {
      path.beginPath();
      el.buildPath(path, el.shape);
      el.pathUpdated();
    }
    var pathVersion = path.getVersion();
    var elExt = el;
    var svgPathBuilder = elExt.__svgPathBuilder;
    if (elExt.__svgPathVersion !== pathVersion || !svgPathBuilder || strokePercent !== elExt.__svgPathStrokePercent) {
      if (!svgPathBuilder) {
        svgPathBuilder = elExt.__svgPathBuilder = new SVGPathRebuilder_default();
      }
      svgPathBuilder.reset(precision);
      path.rebuildPath(svgPathBuilder, strokePercent);
      svgPathBuilder.generateStr();
      elExt.__svgPathVersion = pathVersion;
      elExt.__svgPathStrokePercent = strokePercent;
    }
    attrs.d = svgPathBuilder.getStr();
  }
  setTransform(attrs, el.transform);
  setStyleAttrs(attrs, style, el, scope);
  setMetaData(attrs, el);
  scope.animation && createCSSAnimation(el, attrs, scope);
  scope.emphasis && createCSSEmphasis(el, attrs, scope);
  return createVNode(svgElType, el.id + "", attrs);
}
function brushSVGImage(el, scope) {
  var style = el.style;
  var image = style.image;
  if (image && !isString(image)) {
    if (isImageLike(image)) {
      image = image.src;
    } else if (isCanvasLike(image)) {
      image = image.toDataURL();
    }
  }
  if (!image) {
    return;
  }
  var x = style.x || 0;
  var y = style.y || 0;
  var dw = style.width;
  var dh = style.height;
  var attrs = {
    href: image,
    width: dw,
    height: dh
  };
  if (x) {
    attrs.x = x;
  }
  if (y) {
    attrs.y = y;
  }
  setTransform(attrs, el.transform);
  setStyleAttrs(attrs, style, el, scope);
  setMetaData(attrs, el);
  scope.animation && createCSSAnimation(el, attrs, scope);
  return createVNode("image", el.id + "", attrs);
}
function brushSVGTSpan(el, scope) {
  var style = el.style;
  var text = style.text;
  text != null && (text += "");
  if (!text || isNaN(style.x) || isNaN(style.y)) {
    return;
  }
  var font = style.font || DEFAULT_FONT;
  var x = style.x || 0;
  var y = adjustTextY(style.y || 0, getLineHeight(font), style.textBaseline);
  var textAlign = TEXT_ALIGN_TO_ANCHOR[style.textAlign] || style.textAlign;
  var attrs = {
    "dominant-baseline": "central",
    "text-anchor": textAlign
  };
  if (hasSeparateFont(style)) {
    var separatedFontStr = "";
    var fontStyle = style.fontStyle;
    var fontSize = parseFontSize(style.fontSize);
    if (!parseFloat(fontSize)) {
      return;
    }
    var fontFamily = style.fontFamily || DEFAULT_FONT_FAMILY;
    var fontWeight = style.fontWeight;
    separatedFontStr += "font-size:" + fontSize + ";font-family:" + fontFamily + ";";
    if (fontStyle && fontStyle !== "normal") {
      separatedFontStr += "font-style:" + fontStyle + ";";
    }
    if (fontWeight && fontWeight !== "normal") {
      separatedFontStr += "font-weight:" + fontWeight + ";";
    }
    attrs.style = separatedFontStr;
  } else {
    attrs.style = "font: " + font;
  }
  if (text.match(/\s/)) {
    attrs["xml:space"] = "preserve";
  }
  if (x) {
    attrs.x = x;
  }
  if (y) {
    attrs.y = y;
  }
  setTransform(attrs, el.transform);
  setStyleAttrs(attrs, style, el, scope);
  setMetaData(attrs, el);
  scope.animation && createCSSAnimation(el, attrs, scope);
  return createVNode("text", el.id + "", attrs, void 0, text);
}
function brush(el, scope) {
  if (el instanceof Path_default) {
    return brushSVGPath(el, scope);
  } else if (el instanceof Image_default) {
    return brushSVGImage(el, scope);
  } else if (el instanceof TSpan_default) {
    return brushSVGTSpan(el, scope);
  }
}
function setShadow(el, attrs, scope) {
  var style = el.style;
  if (hasShadow(style)) {
    var shadowKey = getShadowKey(el);
    var shadowCache = scope.shadowCache;
    var shadowId = shadowCache[shadowKey];
    if (!shadowId) {
      var globalScale = el.getGlobalScale();
      var scaleX = globalScale[0];
      var scaleY = globalScale[1];
      if (!scaleX || !scaleY) {
        return;
      }
      var offsetX = style.shadowOffsetX || 0;
      var offsetY = style.shadowOffsetY || 0;
      var blur_1 = style.shadowBlur;
      var _a = normalizeColor(style.shadowColor), opacity = _a.opacity, color = _a.color;
      var stdDx = blur_1 / 2 / scaleX;
      var stdDy = blur_1 / 2 / scaleY;
      var stdDeviation = stdDx + " " + stdDy;
      shadowId = scope.zrId + "-s" + scope.shadowIdx++;
      scope.defs[shadowId] = createVNode("filter", shadowId, {
        "id": shadowId,
        "x": "-100%",
        "y": "-100%",
        "width": "300%",
        "height": "300%"
      }, [
        createVNode("feDropShadow", "", {
          "dx": offsetX / scaleX,
          "dy": offsetY / scaleY,
          "stdDeviation": stdDeviation,
          "flood-color": color,
          "flood-opacity": opacity
        })
      ]);
      shadowCache[shadowKey] = shadowId;
    }
    attrs.filter = getIdURL(shadowId);
  }
}
function setGradient(style, attrs, target, scope) {
  var val = style[target];
  var gradientTag;
  var gradientAttrs = {
    "gradientUnits": val.global ? "userSpaceOnUse" : "objectBoundingBox"
  };
  if (isLinearGradient(val)) {
    gradientTag = "linearGradient";
    gradientAttrs.x1 = val.x;
    gradientAttrs.y1 = val.y;
    gradientAttrs.x2 = val.x2;
    gradientAttrs.y2 = val.y2;
  } else if (isRadialGradient(val)) {
    gradientTag = "radialGradient";
    gradientAttrs.cx = retrieve2(val.x, 0.5);
    gradientAttrs.cy = retrieve2(val.y, 0.5);
    gradientAttrs.r = retrieve2(val.r, 0.5);
  } else {
    if (true) {
      logError("Illegal gradient type.");
    }
    return;
  }
  var colors = val.colorStops;
  var colorStops = [];
  for (var i = 0, len = colors.length; i < len; ++i) {
    var offset = round4(colors[i].offset) * 100 + "%";
    var stopColor = colors[i].color;
    var _a = normalizeColor(stopColor), color = _a.color, opacity = _a.opacity;
    var stopsAttrs = {
      "offset": offset
    };
    stopsAttrs["stop-color"] = color;
    if (opacity < 1) {
      stopsAttrs["stop-opacity"] = opacity;
    }
    colorStops.push(createVNode("stop", i + "", stopsAttrs));
  }
  var gradientVNode = createVNode(gradientTag, "", gradientAttrs, colorStops);
  var gradientKey = vNodeToString(gradientVNode);
  var gradientCache = scope.gradientCache;
  var gradientId = gradientCache[gradientKey];
  if (!gradientId) {
    gradientId = scope.zrId + "-g" + scope.gradientIdx++;
    gradientCache[gradientKey] = gradientId;
    gradientAttrs.id = gradientId;
    scope.defs[gradientId] = createVNode(gradientTag, gradientId, gradientAttrs, colorStops);
  }
  attrs[target] = getIdURL(gradientId);
}
function setPattern(el, attrs, target, scope) {
  var val = el.style[target];
  var boundingRect = el.getBoundingRect();
  var patternAttrs = {};
  var repeat = val.repeat;
  var noRepeat = repeat === "no-repeat";
  var repeatX = repeat === "repeat-x";
  var repeatY = repeat === "repeat-y";
  var child;
  if (isImagePattern(val)) {
    var imageWidth_1 = val.imageWidth;
    var imageHeight_1 = val.imageHeight;
    var imageSrc = void 0;
    var patternImage = val.image;
    if (isString(patternImage)) {
      imageSrc = patternImage;
    } else if (isImageLike(patternImage)) {
      imageSrc = patternImage.src;
    } else if (isCanvasLike(patternImage)) {
      imageSrc = patternImage.toDataURL();
    }
    if (typeof Image === "undefined") {
      var errMsg = "Image width/height must been given explictly in svg-ssr renderer.";
      assert(imageWidth_1, errMsg);
      assert(imageHeight_1, errMsg);
    } else if (imageWidth_1 == null || imageHeight_1 == null) {
      var setSizeToVNode_1 = function(vNode, img) {
        if (vNode) {
          var svgEl = vNode.elm;
          var width = imageWidth_1 || img.width;
          var height = imageHeight_1 || img.height;
          if (vNode.tag === "pattern") {
            if (repeatX) {
              height = 1;
              width /= boundingRect.width;
            } else if (repeatY) {
              width = 1;
              height /= boundingRect.height;
            }
          }
          vNode.attrs.width = width;
          vNode.attrs.height = height;
          if (svgEl) {
            svgEl.setAttribute("width", width);
            svgEl.setAttribute("height", height);
          }
        }
      };
      var createdImage = createOrUpdateImage(imageSrc, null, el, function(img) {
        noRepeat || setSizeToVNode_1(patternVNode, img);
        setSizeToVNode_1(child, img);
      });
      if (createdImage && createdImage.width && createdImage.height) {
        imageWidth_1 = imageWidth_1 || createdImage.width;
        imageHeight_1 = imageHeight_1 || createdImage.height;
      }
    }
    child = createVNode("image", "img", {
      href: imageSrc,
      width: imageWidth_1,
      height: imageHeight_1
    });
    patternAttrs.width = imageWidth_1;
    patternAttrs.height = imageHeight_1;
  } else if (val.svgElement) {
    child = clone(val.svgElement);
    patternAttrs.width = val.svgWidth;
    patternAttrs.height = val.svgHeight;
  }
  if (!child) {
    return;
  }
  var patternWidth;
  var patternHeight;
  if (noRepeat) {
    patternWidth = patternHeight = 1;
  } else if (repeatX) {
    patternHeight = 1;
    patternWidth = patternAttrs.width / boundingRect.width;
  } else if (repeatY) {
    patternWidth = 1;
    patternHeight = patternAttrs.height / boundingRect.height;
  } else {
    patternAttrs.patternUnits = "userSpaceOnUse";
  }
  if (patternWidth != null && !isNaN(patternWidth)) {
    patternAttrs.width = patternWidth;
  }
  if (patternHeight != null && !isNaN(patternHeight)) {
    patternAttrs.height = patternHeight;
  }
  var patternTransform = getSRTTransformString(val);
  patternTransform && (patternAttrs.patternTransform = patternTransform);
  var patternVNode = createVNode("pattern", "", patternAttrs, [child]);
  var patternKey = vNodeToString(patternVNode);
  var patternCache = scope.patternCache;
  var patternId = patternCache[patternKey];
  if (!patternId) {
    patternId = scope.zrId + "-p" + scope.patternIdx++;
    patternCache[patternKey] = patternId;
    patternAttrs.id = patternId;
    patternVNode = scope.defs[patternId] = createVNode("pattern", patternId, patternAttrs, [child]);
  }
  attrs[target] = getIdURL(patternId);
}
function setClipPath(clipPath, attrs, scope) {
  var clipPathCache = scope.clipPathCache, defs = scope.defs;
  var clipPathId = clipPathCache[clipPath.id];
  if (!clipPathId) {
    clipPathId = scope.zrId + "-c" + scope.clipPathIdx++;
    var clipPathAttrs = {
      id: clipPathId
    };
    clipPathCache[clipPath.id] = clipPathId;
    defs[clipPathId] = createVNode("clipPath", clipPathId, clipPathAttrs, [brushSVGPath(clipPath, scope)]);
  }
  attrs["clip-path"] = getIdURL(clipPathId);
}

// ../node_modules/zrender/lib/svg/domapi.js
function createTextNode(text) {
  return document.createTextNode(text);
}
function insertBefore(parentNode2, newNode, referenceNode) {
  parentNode2.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
  node.removeChild(child);
}
function appendChild(node, child) {
  node.appendChild(child);
}
function parentNode(node) {
  return node.parentNode;
}
function nextSibling(node) {
  return node.nextSibling;
}
function setTextContent(node, text) {
  node.textContent = text;
}

// ../node_modules/zrender/lib/svg/patch.js
var colonChar = 58;
var xChar = 120;
var emptyNode = createVNode("", "");
function isUndef(s) {
  return s === void 0;
}
function isDef(s) {
  return s !== void 0;
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
  var map2 = {};
  for (var i = beginIdx; i <= endIdx; ++i) {
    var key = children[i].key;
    if (key !== void 0) {
      if (true) {
        if (map2[key] != null) {
          console.error("Duplicate key " + key);
        }
      }
      map2[key] = i;
    }
  }
  return map2;
}
function sameVnode(vnode1, vnode2) {
  var isSameKey = vnode1.key === vnode2.key;
  var isSameTag = vnode1.tag === vnode2.tag;
  return isSameTag && isSameKey;
}
function createElm(vnode) {
  var i;
  var children = vnode.children;
  var tag = vnode.tag;
  if (isDef(tag)) {
    var elm = vnode.elm = createElement(tag);
    updateAttrs(emptyNode, vnode);
    if (isArray(children)) {
      for (i = 0; i < children.length; ++i) {
        var ch = children[i];
        if (ch != null) {
          appendChild(elm, createElm(ch));
        }
      }
    } else if (isDef(vnode.text) && !isObject(vnode.text)) {
      appendChild(elm, createTextNode(vnode.text));
    }
  } else {
    vnode.elm = createTextNode(vnode.text);
  }
  return vnode.elm;
}
function addVnodes(parentElm, before, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    var ch = vnodes[startIdx];
    if (ch != null) {
      insertBefore(parentElm, createElm(ch), before);
    }
  }
}
function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    var ch = vnodes[startIdx];
    if (ch != null) {
      if (isDef(ch.tag)) {
        var parent_1 = parentNode(ch.elm);
        removeChild(parent_1, ch.elm);
      } else {
        removeChild(parentElm, ch.elm);
      }
    }
  }
}
function updateAttrs(oldVnode, vnode) {
  var key;
  var elm = vnode.elm;
  var oldAttrs = oldVnode && oldVnode.attrs || {};
  var attrs = vnode.attrs || {};
  if (oldAttrs === attrs) {
    return;
  }
  for (key in attrs) {
    var cur = attrs[key];
    var old = oldAttrs[key];
    if (old !== cur) {
      if (cur === true) {
        elm.setAttribute(key, "");
      } else if (cur === false) {
        elm.removeAttribute(key);
      } else {
        if (key === "style") {
          elm.style.cssText = cur;
        } else if (key.charCodeAt(0) !== xChar) {
          elm.setAttribute(key, cur);
        } else if (key === "xmlns:xlink" || key === "xmlns") {
          elm.setAttributeNS(XMLNS, key, cur);
        } else if (key.charCodeAt(3) === colonChar) {
          elm.setAttributeNS(XML_NAMESPACE, key, cur);
        } else if (key.charCodeAt(5) === colonChar) {
          elm.setAttributeNS(XLINKNS, key, cur);
        } else {
          elm.setAttribute(key, cur);
        }
      }
    }
  }
  for (key in oldAttrs) {
    if (!(key in attrs)) {
      elm.removeAttribute(key);
    }
  }
}
function updateChildren(parentElm, oldCh, newCh) {
  var oldStartIdx = 0;
  var newStartIdx = 0;
  var oldEndIdx = oldCh.length - 1;
  var oldStartVnode = oldCh[0];
  var oldEndVnode = oldCh[oldEndIdx];
  var newEndIdx = newCh.length - 1;
  var newStartVnode = newCh[0];
  var newEndVnode = newCh[newEndIdx];
  var oldKeyToIdx;
  var idxInOld;
  var elmToMove;
  var before;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      patchVnode(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      patchVnode(oldStartVnode, newEndVnode);
      insertBefore(parentElm, oldStartVnode.elm, nextSibling(oldEndVnode.elm));
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      patchVnode(oldEndVnode, newStartVnode);
      insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      if (isUndef(oldKeyToIdx)) {
        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
      }
      idxInOld = oldKeyToIdx[newStartVnode.key];
      if (isUndef(idxInOld)) {
        insertBefore(parentElm, createElm(newStartVnode), oldStartVnode.elm);
      } else {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.tag !== newStartVnode.tag) {
          insertBefore(parentElm, createElm(newStartVnode), oldStartVnode.elm);
        } else {
          patchVnode(elmToMove, newStartVnode);
          oldCh[idxInOld] = void 0;
          insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
        }
      }
      newStartVnode = newCh[++newStartIdx];
    }
  }
  if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
    if (oldStartIdx > oldEndIdx) {
      before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx);
    } else {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }
}
function patchVnode(oldVnode, vnode) {
  var elm = vnode.elm = oldVnode.elm;
  var oldCh = oldVnode.children;
  var ch = vnode.children;
  if (oldVnode === vnode) {
    return;
  }
  updateAttrs(oldVnode, vnode);
  if (isUndef(vnode.text)) {
    if (isDef(oldCh) && isDef(ch)) {
      if (oldCh !== ch) {
        updateChildren(elm, oldCh, ch);
      }
    } else if (isDef(ch)) {
      if (isDef(oldVnode.text)) {
        setTextContent(elm, "");
      }
      addVnodes(elm, null, ch, 0, ch.length - 1);
    } else if (isDef(oldCh)) {
      removeVnodes(elm, oldCh, 0, oldCh.length - 1);
    } else if (isDef(oldVnode.text)) {
      setTextContent(elm, "");
    }
  } else if (oldVnode.text !== vnode.text) {
    if (isDef(oldCh)) {
      removeVnodes(elm, oldCh, 0, oldCh.length - 1);
    }
    setTextContent(elm, vnode.text);
  }
}
function patch(oldVnode, vnode) {
  if (sameVnode(oldVnode, vnode)) {
    patchVnode(oldVnode, vnode);
  } else {
    var elm = oldVnode.elm;
    var parent_2 = parentNode(elm);
    createElm(vnode);
    if (parent_2 !== null) {
      insertBefore(parent_2, vnode.elm, nextSibling(elm));
      removeVnodes(parent_2, [oldVnode], 0, 0);
    }
  }
  return vnode;
}

// ../node_modules/zrender/lib/svg/Painter.js
var svgId = 0;
var SVGPainter = function() {
  function SVGPainter2(root, storage, opts) {
    this.type = "svg";
    this.refreshHover = createMethodNotSupport("refreshHover");
    this.configLayer = createMethodNotSupport("configLayer");
    this.storage = storage;
    this._opts = opts = extend({}, opts);
    this.root = root;
    this._id = "zr" + svgId++;
    this._oldVNode = createSVGVNode(opts.width, opts.height);
    if (root && !opts.ssr) {
      var viewport = this._viewport = document.createElement("div");
      viewport.style.cssText = "position:relative;overflow:hidden";
      var svgDom = this._svgDom = this._oldVNode.elm = createElement("svg");
      updateAttrs(null, this._oldVNode);
      viewport.appendChild(svgDom);
      root.appendChild(viewport);
    }
    this.resize(opts.width, opts.height);
  }
  SVGPainter2.prototype.getType = function() {
    return this.type;
  };
  SVGPainter2.prototype.getViewportRoot = function() {
    return this._viewport;
  };
  SVGPainter2.prototype.getViewportRootOffset = function() {
    var viewportRoot = this.getViewportRoot();
    if (viewportRoot) {
      return {
        offsetLeft: viewportRoot.offsetLeft || 0,
        offsetTop: viewportRoot.offsetTop || 0
      };
    }
  };
  SVGPainter2.prototype.getSvgDom = function() {
    return this._svgDom;
  };
  SVGPainter2.prototype.refresh = function() {
    if (this.root) {
      var vnode = this.renderToVNode({
        willUpdate: true
      });
      vnode.attrs.style = "position:absolute;left:0;top:0;user-select:none";
      patch(this._oldVNode, vnode);
      this._oldVNode = vnode;
    }
  };
  SVGPainter2.prototype.renderOneToVNode = function(el) {
    return brush(el, createBrushScope(this._id));
  };
  SVGPainter2.prototype.renderToVNode = function(opts) {
    opts = opts || {};
    var list = this.storage.getDisplayList(true);
    var width = this._width;
    var height = this._height;
    var scope = createBrushScope(this._id);
    scope.animation = opts.animation;
    scope.willUpdate = opts.willUpdate;
    scope.compress = opts.compress;
    scope.emphasis = opts.emphasis;
    var children = [];
    var bgVNode = this._bgVNode = createBackgroundVNode(width, height, this._backgroundColor, scope);
    bgVNode && children.push(bgVNode);
    var mainVNode = !opts.compress ? this._mainVNode = createVNode("g", "main", {}, []) : null;
    this._paintList(list, scope, mainVNode ? mainVNode.children : children);
    mainVNode && children.push(mainVNode);
    var defs = map(keys(scope.defs), function(id) {
      return scope.defs[id];
    });
    if (defs.length) {
      children.push(createVNode("defs", "defs", {}, defs));
    }
    if (opts.animation) {
      var animationCssStr = getCssString(scope.cssNodes, scope.cssAnims, { newline: true });
      if (animationCssStr) {
        var styleNode = createVNode("style", "stl", {}, [], animationCssStr);
        children.push(styleNode);
      }
    }
    return createSVGVNode(width, height, children, opts.useViewBox);
  };
  SVGPainter2.prototype.renderToString = function(opts) {
    opts = opts || {};
    return vNodeToString(this.renderToVNode({
      animation: retrieve2(opts.cssAnimation, true),
      emphasis: retrieve2(opts.cssEmphasis, true),
      willUpdate: false,
      compress: true,
      useViewBox: retrieve2(opts.useViewBox, true)
    }), { newline: true });
  };
  SVGPainter2.prototype.setBackgroundColor = function(backgroundColor) {
    this._backgroundColor = backgroundColor;
  };
  SVGPainter2.prototype.getSvgRoot = function() {
    return this._mainVNode && this._mainVNode.elm;
  };
  SVGPainter2.prototype._paintList = function(list, scope, out) {
    var listLen = list.length;
    var clipPathsGroupsStack = [];
    var clipPathsGroupsStackDepth = 0;
    var currentClipPathGroup;
    var prevClipPaths;
    var clipGroupNodeIdx = 0;
    for (var i = 0; i < listLen; i++) {
      var displayable = list[i];
      if (!displayable.invisible) {
        var clipPaths = displayable.__clipPaths;
        var len = clipPaths && clipPaths.length || 0;
        var prevLen = prevClipPaths && prevClipPaths.length || 0;
        var lca = void 0;
        for (lca = Math.max(len - 1, prevLen - 1); lca >= 0; lca--) {
          if (clipPaths && prevClipPaths && clipPaths[lca] === prevClipPaths[lca]) {
            break;
          }
        }
        for (var i_1 = prevLen - 1; i_1 > lca; i_1--) {
          clipPathsGroupsStackDepth--;
          currentClipPathGroup = clipPathsGroupsStack[clipPathsGroupsStackDepth - 1];
        }
        for (var i_2 = lca + 1; i_2 < len; i_2++) {
          var groupAttrs = {};
          setClipPath(clipPaths[i_2], groupAttrs, scope);
          var g = createVNode("g", "clip-g-" + clipGroupNodeIdx++, groupAttrs, []);
          (currentClipPathGroup ? currentClipPathGroup.children : out).push(g);
          clipPathsGroupsStack[clipPathsGroupsStackDepth++] = g;
          currentClipPathGroup = g;
        }
        prevClipPaths = clipPaths;
        var ret = brush(displayable, scope);
        if (ret) {
          (currentClipPathGroup ? currentClipPathGroup.children : out).push(ret);
        }
      }
    }
  };
  SVGPainter2.prototype.resize = function(width, height) {
    var opts = this._opts;
    var root = this.root;
    var viewport = this._viewport;
    width != null && (opts.width = width);
    height != null && (opts.height = height);
    if (root && viewport) {
      viewport.style.display = "none";
      width = getSize(root, 0, opts);
      height = getSize(root, 1, opts);
      viewport.style.display = "";
    }
    if (this._width !== width || this._height !== height) {
      this._width = width;
      this._height = height;
      if (viewport) {
        var viewportStyle = viewport.style;
        viewportStyle.width = width + "px";
        viewportStyle.height = height + "px";
      }
      if (!isPattern(this._backgroundColor)) {
        var svgDom = this._svgDom;
        if (svgDom) {
          svgDom.setAttribute("width", width);
          svgDom.setAttribute("height", height);
        }
        var bgEl = this._bgVNode && this._bgVNode.elm;
        if (bgEl) {
          bgEl.setAttribute("width", width);
          bgEl.setAttribute("height", height);
        }
      } else {
        this.refresh();
      }
    }
  };
  SVGPainter2.prototype.getWidth = function() {
    return this._width;
  };
  SVGPainter2.prototype.getHeight = function() {
    return this._height;
  };
  SVGPainter2.prototype.dispose = function() {
    if (this.root) {
      this.root.innerHTML = "";
    }
    this._svgDom = this._viewport = this.storage = this._oldVNode = this._bgVNode = this._mainVNode = null;
  };
  SVGPainter2.prototype.clear = function() {
    if (this._svgDom) {
      this._svgDom.innerHTML = null;
    }
    this._oldVNode = null;
  };
  SVGPainter2.prototype.toDataURL = function(base64) {
    var str = this.renderToString();
    var prefix = "data:image/svg+xml;";
    if (base64) {
      str = encodeBase64(str);
      return str && prefix + "base64," + str;
    }
    return prefix + "charset=UTF-8," + encodeURIComponent(str);
  };
  return SVGPainter2;
}();
function createMethodNotSupport(method) {
  return function() {
    if (true) {
      logError('In SVG mode painter not support method "' + method + '"');
    }
  };
}
function createBackgroundVNode(width, height, backgroundColor, scope) {
  var bgVNode;
  if (backgroundColor && backgroundColor !== "none") {
    bgVNode = createVNode("rect", "bg", {
      width,
      height,
      x: "0",
      y: "0"
    });
    if (isGradient(backgroundColor)) {
      setGradient({ fill: backgroundColor }, bgVNode.attrs, "fill", scope);
    } else if (isPattern(backgroundColor)) {
      setPattern({
        style: {
          fill: backgroundColor
        },
        dirty: noop,
        getBoundingRect: function() {
          return { width, height };
        }
      }, bgVNode.attrs, "fill", scope);
    } else {
      var _a = normalizeColor(backgroundColor), color = _a.color, opacity = _a.opacity;
      bgVNode.attrs.fill = color;
      opacity < 1 && (bgVNode.attrs["fill-opacity"] = opacity);
    }
  }
  return bgVNode;
}
var Painter_default = SVGPainter;

export {
  Painter_default
};
//# sourceMappingURL=chunk-FVPX7YXV.js.map
