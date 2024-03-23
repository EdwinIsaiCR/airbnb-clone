import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Divider, Button, Switch, Box, FormLabel } from "@chakra-ui/react";
const BreadcrumbMenu = () => {
    return (
      <>
      <Divider color={'white'}/>
      <Box bg={'white'} color={'black'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Breadcrumb separator={" "} m={'5'}>
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Ranchos</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Vista increible</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Lago</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Desierto</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Golf</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Casas domo</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Cabañas</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Casas alphinas</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Diseño</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Habitaciones</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Extraordinarios</BreadcrumbLink>
          </BreadcrumbItem>
          
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Nuevo</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Albercas increibles</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>En el lago</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box display={'flex'} m={'5'}>
          <Box p={'3'}>
          <Button
          color={'black'}
             boxShadow='lg'borderRadius={'30'} bg='white' 
            >
              Filtros
            </Button>
            </Box>
            <Box p={'3'}>
          <Button
          color={'black'}
             boxShadow='lg'borderRadius={'30'} bg='white' 
            >
              Mostrar total sin impuestos
              
              <Switch id='email-alerts' size='md'/>
            </Button>
            </Box>
        </Box>
        </Box>
</>
    );
};

export default BreadcrumbMenu;
