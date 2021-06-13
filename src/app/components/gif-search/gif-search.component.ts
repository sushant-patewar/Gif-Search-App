import { Component, OnInit } from "@angular/core";
import { GifSearchService } from "src/app/services/gif-search.service";

@Component({
  selector: "app-gif-search",
  templateUrl: "./gif-search.component.html",
  styleUrls: ["./gif-search.component.scss"],
})
export class GifSearchComponent implements OnInit {
  gifResponse: any[];
  loader = true;

  constructor(private gifSearchService: GifSearchService) {}

  ngOnInit() {
    // When page loads fetching results for cheeseburgers by default
    this.gifSearchService.searchGif("cheeseburgers").subscribe((res)=>{
      console.log(res);
      this.gifResponse = res.data;
      this.displayGifs();
    }, err=>{
      console.log(err);
    });
  }

  displayGifs() {
    let mainContainer = document.getElementById("main-content");
    mainContainer.innerHTML = "";
    this.loader = true;
    for (var i = 0; i < this.gifResponse.length; i++) {
      mainContainer.innerHTML +=
        '<figure><img src="' +
        this.gifResponse[i].images.downsized.url +
        '"></figure>';
    }
    this.loader = false;
  }

  searchGifs() {
    const userInput = (<HTMLInputElement>document.getElementById("userinput")).value;
    this.gifSearchService.searchGif(userInput).subscribe((res)=>{
      console.log(res);
      this.gifResponse = res.data;
      this.displayGifs();
    }, err=>{
      console.log(err);
    });
  }
}
