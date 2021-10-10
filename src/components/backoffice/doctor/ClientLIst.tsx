import { Divider } from "@mui/material"
import { Box } from "@mui/system"
import Stack from '@mui/material/Stack';
import { DEFAULT_DOC_REQUEST } from "../../../Static/Data";
import { RequestItem } from "./Notification";

export const ClientLists = () => {
    return (
        <Box width="100%" >
            <h1>Liste des client reçue</h1>
            <Divider style={{ marginBottom: 16 }} />
            <Stack direction="column">
                {DEFAULT_DOC_REQUEST.map((item) => (
                    <RequestItem isClist request={item} onConfirm={(id) => {/** */ }} />
                ))}
            </Stack>
        </Box>
    )
}