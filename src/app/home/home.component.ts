import { Component, OnInit } from '@angular/core';
import { ComputerVisionAPIService } from '../computer-vision-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    //cognitive variables
    language = "unk";
    imgurl = "";

    
    /// Detectable Languages
    Langunages = {
         Automatic: "unk",
         ChineseSimplified: "zh-Hans",
         ChineseTraditional: "zh-Hant",
         Czech: "cs",
         Danish: "da",
         Dutch: "nl",
         English: "en",
         Finnish: "fi",
         French: "fr",
         German: "de",
         Greek: "el",
         Hungarian: "hu",
         Italian: "it",
         Japanese: "Ja",
         Korean: "ko",
         Norwegian: "nb",
         Polish: "pl",
         Portuguese: "pt",
         Russian: "ru",
         Spanish: "es",
         Swedish: "sv",
         Turkish: "tr"
    };

  selectURL = true;
  selectLocalImage = true;

  constructor(
    private visionService: ComputerVisionAPIService, 
    private router: Router
    ) { }

  ngOnInit() {
  }

  onImageSupplied(): void{
    this.visionService.getVision(this.language)
    .then(vision => {
      console.log(vision);
    });
  }

}
