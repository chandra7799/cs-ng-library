import { TestBed } from '@angular/core/testing';

import { FormBuilderTrackerService } from './form-builder-tracker.service';

describe('FormBuilderTrackerService', () => {
  let service: FormBuilderTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormBuilderTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
