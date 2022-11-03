import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  input = [
    {
      "valueSCH": "0",
      "valueNTS": "",
      "SCH": [
        {
          "valueSCH2": "0",
          "date": "test",
          "amount": "test",
          "rate": "test",
          "freq": "test",
          "repayAtm": ""
        },
        {
          "valueSCH2": "0",
          "date": "test1",
          "amount": "",
          "rate": "",
          "freq": "",
          "repayAtm": ""
        }
      ]
    },
    {
      "valueSCH": "1",
      "valueNTS": "",
      "SCH": []
    },
    {
      "valueSCH": "2",
      "valueNTS": "",
      "SCH": [
        {
          "valueSCH2": "2",
          "date": "test7",
          "amount": "",
          "rate": "",
          "freq": "",
          "repayAtm": ""
        }
      ]
    },
    {
      "valueSCH": "3",
      "valueNTS": "",
      "SCH": [
        {
          "valueSCH2": "3",
          "date": "test5",
          "amount": "",
          "rate": "",
          "freq": "",
          "repayAtm": ""
        },
        {
          "valueSCH2": "3",
          "date": "",
          "amount": "",
          "rate": "",
          "freq": "",
          "repayAtm": ""
        }
      ]
    }
  ]
  name = 'Angular ' + VERSION.major;
}
