import{Routes} from "@angular/router";
import { pageoneComponent } from "../components/pageone/pageone.component";
import { pagetwoComponent } from "../components/pagetwo/pagetwo.component";
import { pagethreeComponent } from "../components/pagethree/pagethree.component";
export const appRoute:Routes=[
    {path:"",component:pageoneComponent},
    {path:"page_two",component:pagetwoComponent},
    {path:"page_three",component:pagethreeComponent}
]
