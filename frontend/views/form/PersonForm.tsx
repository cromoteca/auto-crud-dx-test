import { ExperimentalAutoForm } from "@hilla/react-crud";
import PersonModel from "Frontend/generated/com/example/application/entities/PersonModel";
import { PersonService } from "Frontend/generated/endpoints";
import { PasswordField } from "@hilla/react-components/PasswordField";
import { useEffect, useState } from "react";
import Person from "Frontend/generated/com/example/application/entities/Person";
import { TextField } from "@hilla/react-components/TextField";

export default function PersonForm() {
    const [person, setPerson] = useState<Person | undefined>();

    useEffect(() => {
        PersonService.get(5).then(setPerson)
    }, []);

    return <ExperimentalAutoForm
        model={PersonModel}
        service={PersonService}
        item={person}
        customLayoutRenderer={{
            template: [
                [{ property: 'username', colSpan: 1 }, { property: 'password', colSpan: 1 }]
            ]
        }}
        fieldOptions={{
            'username': { renderer: ({ field }) => <TextField {...field} label="Username" readonly /> },
            'password': { renderer: () => <></> }
        }}
    />;
}
