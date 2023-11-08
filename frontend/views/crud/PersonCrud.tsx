import { ExperimentalAutoCrud } from "@hilla/react-crud";
import PersonModel from "Frontend/generated/com/example/application/entities/PersonModel";
import { PersonService } from "Frontend/generated/endpoints";
import { TextField } from "@hilla/react-components/TextField";

export default function PersonCrud() {
    return <ExperimentalAutoCrud model={PersonModel} service={PersonService} gridProps={
        { visibleColumns: ["firstName", "lastName", "email", "phoneNumber", "birthDate", "occupation"] }
    } formProps={{
        customLayoutRenderer: {
            template: [
                [{ property: 'username', colSpan: 1 }, { property: 'password', colSpan: 1 }]
            ]
        },
        fieldOptions:
        {
            'username': { renderer: ({ field }) => <TextField {...field} label="Username" readonly /> },
            'password': { renderer: () => <></> }
        }
    }} />;
}
