import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Copyright } from "@mui/icons-material";

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
            <Grid container justifyContent="center">
              <Grid item key={character.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 300, height: 400 }}
                    image={character.image}
                    alt="Live from space album cover"
                  />
                  <CardContent
                    display="flex"
                    justifycontent="center"
                    align="center"
                  >
                    <Typography gutterBottom variant="h5" component="h2">
                      {character.name}
                    </Typography>

                    <p>
                      {character.species} <span>-</span> {character.gender}
                    </p>
                    <p>
                      {character.location.name} <span>-</span>{" "}
                      {character.origin.name}
                    </p>
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
          // card prueba

          <h2>Cargando..</h2>
        )}
      </main>
    </>
  );
};
