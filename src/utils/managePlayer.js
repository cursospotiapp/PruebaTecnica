import Localbase from "localbase";
let db = new Localbase("db");
db.config.debug = false;

export const saveUser = async (name) => {
  try {
    let player = await db.collection("players").doc({ name: name }).get();

    if (!player?.name) {
      const objPlayer = {
        name,
        points: 0,
        bestScore: 0,
      };
      await db.collection("players").add(objPlayer);
      return objPlayer;
    } else {
      return player;
    }
  } catch (error) {
    console.log("Error saving player: ", error);
  }
};

export const updateUser = async (name, points, bestScore) => {
  try {
    await db.collection("players").doc({ name: name }).update({
      points,
      bestScore,
    });
  } catch (error) {
    console.log("Error updating player: ", error);
  }
};
