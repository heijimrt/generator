import { Component } from '@angular/core';
<%= getImport(artifacts, 'component') %>

@Component({
    selector: '<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: [ './<%= dasherize(name) %>.component.scss' ]
})
export class <%= classify(name) %>Component {
    <%= getMethod(artifacts, 'component') %>
}
