import { Text } from "react-native"
import { PageSectionTypes } from "../Types/Types"

/* === 
    Page Section 
    Title
=== */
export const PageSection = ({title}:PageSectionTypes) => {
    return (
        <Text style={{fontSize: 18, fontWeight: '600', color: 'white'}}>{title}</Text>
    )
}