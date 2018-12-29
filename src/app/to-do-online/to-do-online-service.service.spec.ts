import { TestBed } from '@angular/core/testing';

import { ToDoOnlineServiceService } from './to-do-online-service.service';

describe('ToDoOnlineServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoOnlineServiceService = TestBed.get(ToDoOnlineServiceService);
    expect(service).toBeTruthy();
  });
});
