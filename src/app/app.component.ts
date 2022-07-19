import { Component, OnInit } from '@angular/core';
import { GoogleApiHttpService } from './services/google-api-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Books Search';
  searchText: string = '';
  booksVolumes: any[] = [];
  isLoading = false;
  constructor(private googleApi: GoogleApiHttpService) {}

  ngOnInit() {
    //this.onSearch();
  }

  onSearch() {
    this.isLoading = true;
    const req = this.googleApi.getBooksVolumes({
      q: this.searchText,
      maxResults: 10,
    });
    req.subscribe((data) => {
      console.log(data);
      this.booksVolumes = (data as any).items;
      this.isLoading = false;
    });
  }
}
