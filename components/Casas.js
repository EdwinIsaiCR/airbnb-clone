import { Box, Card, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { data } from "../utils/data";
import Link from "next/link";
import BreadcrumbMenu from "../components/Breadcrumb";
const Casas = () => {
  return (
    <>
    <BreadcrumbMenu/>
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
    <Grid templateColumns={{base: "1fr", lg: "repeat(4, 1fr)"}} gap={6} margin={'50'}>
            {data.casas.map((casas) => (
            <GridItem key={casas.id} colSpan={1}>
              <Card width={400} h={390} bg={'white'} p={2}>
                <Link href={`/casa/${casas.id}`}>
                <Image
                key={casas.id}
                src={`/images/${casas.image}`}
                w={'100%'}
                h={'250'}
                style={{objectFit: 'cover'}}
                alt={casas.title}
                />
                <Box py={1} px={3} alignItems={'center'}>
                  <Text color={'black'}>{casas.title}</Text>
                  <Text color={'grey'}>{casas.description}</Text>
                  <Text color={'grey'}>{casas.date}</Text>
                  <Text color={'black'}>${casas.price} MXN noche</Text>
                </Box>
                </Link>
                </Card>
                </GridItem>
            ))}
    </Grid>
    </Box>
    </>
  )
}

export default Casas