import './style.css'
import {setupChart} from "./chart";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <div id="chartdiv"></div>
  </div>
`

setupChart();