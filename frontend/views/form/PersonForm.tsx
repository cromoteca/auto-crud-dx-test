import { ExperimentalAutoForm } from "@hilla/react-crud";
import PersonModel from "Frontend/generated/com/example/application/entities/PersonModel";
import { PersonService } from "Frontend/generated/endpoints";
import {PasswordField} from "@hilla/react-components/PasswordField";
import {useEffect, useState} from "react";
import Person from "Frontend/generated/com/example/application/entities/Person";

export default function PersonForm() {
    const [person, setPerson] = useState<Person | undefined>();

    useEffect(()=> {
        PersonService.get(5).then(setPerson)
    }, []);

    return <ExperimentalAutoForm model={PersonModel} service={PersonService} item={person} fieldOptions={
        {
            'password': {
                renderer: ({ field }) => <PasswordField {...field} label="Password" />
            }
        }
    } />;
}
