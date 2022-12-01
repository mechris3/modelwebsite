import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { Feature1DataService } from './feature1.data.service';

const MockResponse = {
    name: 'Feature 1',
    featureDetails: {
        version: '1.0.0',
    },
};

describe('Feature1DataService', () => {
    let service: Feature1DataService;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [Feature1DataService],
        });

        service = TestBed.inject(Feature1DataService);
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('getData should return Observable of type IState', () => {
        service.getData().subscribe((response) => {
            expect(response).toEqual(MockResponse);
        });
        const req = httpTestingController.expectOne(
            'assets/feature1data/data.json'
        );
        req.flush(MockResponse);
    });
});
