import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { Alignment, AlignType } from "../overlay/positioning";


interface AlignmentRecord {
    value: AlignType;
    name: string;
}

interface Alignments {
    horizontal: AlignmentRecord[];
    vertical: AlignmentRecord[];
}

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    public form: FormGroup;
    public align: Alignment;
    public alignments: Alignments = {
        horizontal: [
            {
                value: AlignType.Left,
                name: "Left"
            },
            {
                value: AlignType.Right,
                name: "Right"
            },
            {
                value: AlignType.Middle,
                name: "Middle"
            }
        ],
        vertical: [
            {
                value: AlignType.Top,
                name: "Top"
            },
            {
                value: AlignType.Center,
                name: "Center"
            },
            {
                value: AlignType.Bottom,
                name: "Bottom"
            }
        ]
    };

    public constructor(private fb: FormBuilder) {}

    public ngOnInit(): void {
        this.form = this.fb.group({
            date: ""
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
        };
    }
}
