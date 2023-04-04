---
sidebar_position: 2
---



# 安装与使用
## 安装
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="yarn" label="yarn" default>

```bash
yarn add everpay
```

</TabItem>
<TabItem value="npm" label="npm">

```bash
npm install everpay
```

</TabItem>
</Tabs>


## 使用

<Tabs>
<TabItem value="es_module" label="ES Modules" default>

```ts
import Everpay from 'everpay'
const everpay = new Everpay()
```

</TabItem>
<TabItem value="commonjs" label="CommonJS">

```js
const Everpay = require('everpay')
const everpay = new Everpay()
```

</TabItem>
</Tabs>