import { Component } from '@angular/core';
import  OrgChart from 'src/assets/diagram/orgchart';

@Component({
  selector: 'app-teacher-org-chart',
  templateUrl: './teacher-org-chart.component.html',
  styleUrls: ['./teacher-org-chart.component.css']
})
export class TeacherOrgChartComponent {
  /**
   * 
   */
  ngOnInit() {
    const tree = document.getElementById('teacher-chart');
    if (tree) {
      var chart = new OrgChart(tree, {
        mouseScrool: OrgChart.none,
        nodeBinding: {
        field_0: "name",
        img_0: "img"
        },
      });

      chart.load(this.teacherNodes);
    }
  }  

  /**
   * 
   */
  teacherNodes = [
    { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
    { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
    { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
    { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
    { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
    { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
    { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
  ]
}