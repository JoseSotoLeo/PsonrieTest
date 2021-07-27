import { TestBed } from '@angular/core/testing';

import { PsiProfileServiceService } from './psi-profile-service.service';

describe('PsiProfileServiceService', () => {
  let service: PsiProfileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsiProfileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
