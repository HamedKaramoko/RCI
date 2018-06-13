import { TestBed, inject } from '@angular/core/testing';

import { FetchTableDataService } from './fetch-table-data.service';

xdescribe('FetchTableDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchTableDataService]
    });
  });

  it('should be created', inject([FetchTableDataService], (service: FetchTableDataService) => {
    expect(service).toBeTruthy();
  }));
});
