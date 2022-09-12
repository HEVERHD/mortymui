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
          <Container>
            <Grid container spacing={4}>
              <Grid item key={character.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    width: 800,
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
          // card prueba

          <h2>Cargando..</h2>
        )}
      </main>
    </>
  );
};
