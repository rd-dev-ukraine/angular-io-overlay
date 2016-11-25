import {Component} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {AlignType, Alignment} from "./overlay/positioning";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    form: FormGroup;
    align: Alignment;
    alignments = {
        horizontal: [
            {
                value: AlignType.Left,
                name: 'Left'
            },
            {
                value: AlignType.Right,
                name: 'Right'
            },
            {
                value: AlignType.Middle,
                name: 'Middle'
            }
        ],
        vertical: [
            {
                value: AlignType.Top,
                name: 'Top'
            },
            {
                value: AlignType.Center,
                name: 'Center'
            },
            {
                value: AlignType.Bottom,
                name: 'Bottom'
            }
        ]
    };

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.form = this.fb.group({
            date: ''
        });
        this.align = {
            element: {
                horizontal: AlignType.Left,
                vertical: AlignType.Bottom
            },
            target: {
                horizontal: AlignType.Left,
                vertical: AlignType.Top
            }
        }
    }
}
