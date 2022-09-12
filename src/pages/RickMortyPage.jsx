import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const RickMortyPage = () => {
  const [listCharacter, setListCharacter] = useState([]);

  useEffect(() => {
    const enPoint = `https://rickandmortyapi.com/api/character`;
    axios
      .get(enPoint)
      .then((res) => {
        const apiData = res.data;
        setListCharacter(apiData.results);
        console.log(apiData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        justifyContent="center"
        color="text.primary"
        gutterBottom
      >
        Morty Page
      </Typography>
      <main>
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {listCharacter.map((character) => (
              <Grid item key={character.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      16: 9,
                      //   pt: "56.25%",
                    }}
                    image={character.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {character.name}
                    </Typography>
                    <Typography>Status : {character.status}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      component={RouterLink}
                      to={`/details?characterID=${character.id}`}
                      size="small"
                    >
                      Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};
