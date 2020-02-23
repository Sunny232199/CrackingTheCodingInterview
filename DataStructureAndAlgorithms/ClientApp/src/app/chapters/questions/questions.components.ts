import { Component } from "@angular/core";
import { QuestionsAndSolution } from "src/app/models/questions-and-answers.model";

@Component({
    selector: 'questions',
    templateUrl: 'questions.components.html'
})
export class QuestionsComponent {
    questionsAndSolutions: QuestionsAndSolution[];

    ngOnInit() {
        this.questionsAndSolutions = history.state.data;
    }
}