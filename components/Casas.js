import { Box, Card, Grid, GridItem, Image } from "@chakra-ui/react";
import { data } from "../utils/data";
import Link from "next/link";

const Casas = () => {
  return (
    <>
    <Grid templateColumns={{base: "1fr", lg: "repeat(4, 1fr)"}} gap={6}>
            {data.casas.map((casas) => (
            <GridItem key={casas.id} colSpan={1}>
              <Card>
                <Link href={`/casa/${casas.id}`}>
                <Image
                key={casas.id}
                src={`/images/${casas.image}`}
                height={230}
                width={230}
                style={{objectFit: 'cover'}}
                alt={casas.title}
                />
                <Box py={1} px={3}>
                <h3>{casas.title}</h3>
                <div>{casas.description}</div>
                <div>${casas.price} MXN noche</div>
                </Box>
                </Link>
                </Card>
                </GridItem>
            ))}
    </Grid>
    </>
  )
}

export default Casas