/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComputerVisionAPIService } from './computer-vision-api.service';

describe('ComputerVisionAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComputerVisionAPIService]
    });
  });

  it('should ...', inject([ComputerVisionAPIService], (service: ComputerVisionAPIService) => {
    expect(service).toBeTruthy();
  }));
});
