import { ExperimentalAutoCrud } from "@hilla/react-crud";
import PersonModel from "Frontend/generated/com/example/application/entities/PersonModel";
import { PersonService } from "Frontend/generated/endpoints";

export default function PersonCrud() {
    return <ExperimentalAutoCrud model={PersonModel} service={PersonService} />;
}
