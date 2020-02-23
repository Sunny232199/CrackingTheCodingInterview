import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Chapter } from "../models/questions-and-answers.model";

@Injectable()
export class ReadJsonService {

    _jsonURL = 'assets/QuestionsAndAnswers.json';
    questionAndAnswers$ = new BehaviorSubject<Array<Chapter>>([{} as Chapter]);
    constructor(private http: HttpClient) {
    }

    public getJSON() {
        this.http.get<Chapter[]>(this._jsonURL).subscribe(
            data => {
                this.questionAndAnswers$.next(data);
            }
        );
    }
    get questionAndAnswers(): Observable<Chapter[]> {
        return this.questionAndAnswers$.asObservable();
    }
    public getChapters() {
        return this.questionAndAnswers
        // .map(chapters => {
        //     chapters.id,
        //         chapters.title,
        //         chapters.description
        // });
    }

    public getQuestions(chapterId: number) {
        return this.questionAndAnswers
        // .filter(chapter => chapter.id == chapterId).map(
        //     questions => questions.questionsAndSolutions
        // );
    }
}