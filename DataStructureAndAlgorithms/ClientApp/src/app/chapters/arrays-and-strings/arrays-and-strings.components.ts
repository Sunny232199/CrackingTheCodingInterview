import { Component } from "@angular/core";

@Component({
    selector: 'arrays-and-strings',
    templateUrl: 'arrays-and-strings.components.html'
})
export class ArraysAndStringsComponent {
    answer1Approach1 = 
    `
    namespace DataStructureAndAlgorithms
    {
        public class WeatherForecast
        {
            public DateTime Date { get; set; }
    
            public int TemperatureC { get; set; }
    
            public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
    
            public string Summary { get; set; }
        }
    }`
}