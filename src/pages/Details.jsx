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

export const Details = () => {
  const [character, setCharacter] = useState(null);
  let query = new URLSearchParams(window.location.search);
  let characterID = query.get("characterID");

  useEffect(() => {
    const enPointDetails = `https://rickandmortyapi.com/api/character/${characterID}`;
    axios
      .get(enPointDetails)
      .then((res) => {
        const apiData = res.data;
        setCharacter(apiData);
        console.log({ apiData });
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
        Details
      </Typography>
      <main>
        {character ? (
          <Container sx={{ py: 2 }} maxWidth="md">
            <Grid container spacing={4}>
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
                    <Button component={RouterLink} to={`/`} size="small">
                      Back
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        ) : (
          <h2>Cargando..</h2>
        )}
      </main>
    </>
  );
};
