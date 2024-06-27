import{_ as s,o as a,c as n,V as p}from"./chunks/framework.bedf30b3.js";const F=JSON.parse('{"title":"开始使用","description":"","frontmatter":{},"headers":[],"relativePath":"guide/usage.md","filePath":"guide/usage.md","lastUpdated":1719504106000}'),l={name:"guide/usage.md"},o=p(`<h1 id="开始使用" tabindex="-1">开始使用 <a class="header-anchor" href="#开始使用" aria-label="Permalink to &quot;开始使用&quot;">​</a></h1><h2 id="通过-npm-安装" tabindex="-1">通过 npm 安装 <a class="header-anchor" href="#通过-npm-安装" aria-label="Permalink to &quot;通过 npm 安装&quot;">​</a></h2><p>我们提供了 <code>@ksg/echarts</code> npm 包，通过下面命令即可完成安装，<code>@ksg/echarts</code> 依赖于 <code>echarts</code>，所以不要忘记安装依赖包。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@ksg/echarts</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echarts</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-S</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@ksg/echarts</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echarts</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-S</span></span></code></pre></div><h2 id="引入-ksg-echarts" tabindex="-1">引入 @ksg/echarts <a class="header-anchor" href="#引入-ksg-echarts" aria-label="Permalink to &quot;引入 @ksg/echarts&quot;">​</a></h2><p>安装完成后，即可使用 <code>import</code> 或 <code>require</code> 使用。</p><p>完整引入 <code>@ksg/echarts</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> KsgCharts </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@ksg/echarts&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(KsgCharts)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> KsgCharts </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@ksg/echarts&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(KsgCharts)</span></span></code></pre></div><p>按需引入 <code>@ksg/echarts</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { PieChart } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@ksg/echarts&#39;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 引入单个图表</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;PieChart&#39;</span><span style="color:#E1E4E8;">, PieChart)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { PieChart } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@ksg/echarts&#39;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 引入单个图表</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;PieChart&#39;</span><span style="color:#24292E;">, PieChart)</span></span></code></pre></div><h2 id="创建图表" tabindex="-1">创建图表 <a class="header-anchor" href="#创建图表" aria-label="Permalink to &quot;创建图表&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">bar-chart</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:data</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;chartData&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">bar-chart</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:data</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;chartData&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  const chartData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    dimensions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Week&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: [</span><span style="color:#9ECBFF;">&#39;Mon.&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Tue.&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Wed.&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Thu.&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Fir.&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Sat.&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Sun.&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    measures: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;PV&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: [</span><span style="color:#79B8FF;">256</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">767</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1356</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2087</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">803</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">582</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">432</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;UV&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: [</span><span style="color:#79B8FF;">287</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">707</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1756</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1822</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">987</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">432</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">322</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  const chartData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    dimensions: {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Week&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      data: [</span><span style="color:#032F62;">&#39;Mon.&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Tue.&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Wed.&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Thu.&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Fir.&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Sat.&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Sun.&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    measures: [{</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;PV&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      data: [</span><span style="color:#005CC5;">256</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">767</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1356</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2087</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">803</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">582</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">432</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    }, {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;UV&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      data: [</span><span style="color:#005CC5;">287</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">707</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1756</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1822</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">987</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">432</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">322</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    }]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>目前支持的单个引入图表列表如下：</p><table><thead><tr><th>图表</th><th>组件</th></tr></thead><tbody><tr><td>折线图</td><td>VeLineChart</td></tr><tr><td>柱状图</td><td>VeBarChart</td></tr><tr><td>饼图</td><td>VePieChart</td></tr></tbody></table>`,15),e=[o];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const C=s(l,[["render",t]]);export{F as __pageData,C as default};
