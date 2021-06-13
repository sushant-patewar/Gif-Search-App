import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GifSearchService {
  constructor(private http: HttpClient) {}

  URLS = {
    searchgif: "https://api.giphy.com/v1/gifs/search",
  };

  searchGif(searchString: any) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    let params = new HttpParams()
      .set("api_key", "gvCZqBU3dc13YHpynQ5MgZSXXFofABOT")
      .set("q", searchString);
    let options = { headers: headers, params: params };

    return this.http.get<any>(this.URLS.searchgif, options);
  }
}
