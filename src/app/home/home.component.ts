import { Component, OnInit } from '@angular/core';
import { ComputerVisionAPIService } from '../computer-vision-api.service';
import {TranslationAPIService } from '../translation-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    //cognitive variables
    language = "unk";
    tolanguage = "en";
    imgurl = "";
    file:File;
    visionText = "";
    translatedText = "";

    
    /// Detectable Languages
    Languages = {
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

  selectURL = false;
  selectLocalImage = true;

  constructor(
    private visionService: ComputerVisionAPIService, 
    private translationService: TranslationAPIService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onImageSupplied(): void{
    var t = this;
	this.visionText = "";
    if(this.selectURL){
    this.visionService.getVision(this.language, this.imgurl, null)
    .then(vision => {
      console.log(vision);
      t.setText(vision);
    });
    }else if(this.selectLocalImage){
    this.visionService.getVision(this.language, null, this.file)
    .then(vision => {
      console.log(vision);
      t.setText(vision);
    });
    }
  }

  setText(vision:any){
    console.log(this.visionText);
    var lines = vision.regions[0].lines;
    for(var line of lines){
      var words = line.words;
      for(var word of words){
        this.visionText += word.text + " ";
      }
      this.visionText += "\n";
    }
    console.log(this.visionText);
  }

  setTranslationText(translation:any){
    this.translatedText = translation.data.translations[0].translatedText;
  }

  translateText(){
    var t = this;
	this.translatedText = "";
    var lang = this.language;
    if(lang == "unk"){
      lang = "en";
    }
    this.translationService.getTranslation(this.tolanguage, lang, this.visionText)
    .then(translation => {
      console.log(translation);
      t.setTranslationText(translation);
    });
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        this.file = fileList[0];
        console.log(this.file);
    }
}
}
