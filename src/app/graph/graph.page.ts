import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {

  private colorList: String[] = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple'];
  private classPreferences: Number[] = [5, //red
                                        3, //orange
                                        1, //yellow
                                        4, //green
                                        6, //blue
                                        3] //purple
  constructor() { }

  ngOnInit() { }

  options = {
    xAxis: {
        interval: 1,
        type: 'category',
        data: this.colorList
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: this.classPreferences,
        type: 'bar'
    }]
  };

  options2 = {
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    series : [
        {
            type:'pie',
            radius : '55%',
            data:[{value:this.classPreferences[0], name:'Red'},
                {value:this.classPreferences[1], name:'Orange'},
                {value:this.classPreferences[2], name:'Yellow'},
                {value:this.classPreferences[3], name:'Green'},
                {value:this.classPreferences[4], name:'Blue'},
                {value:this.classPreferences[5], name:'Purple'}]
        }]
    };
}
