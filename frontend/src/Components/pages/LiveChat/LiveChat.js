import React, { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import "./LiveChat.css";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#00a300",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 2, 0),
  },
  root: {
    boxShadow: "none",
  },
});
class LiveChat extends Component {
  state = {
    isLoggedIn: false,
    messages: [],
    value: "",
    name: "",
    room: "recycle",
  };
  client = new W3CWebSocket(
    "ws://127.0.0.1:8000/ws/chat/" + this.state.room + "/"
  );

  onButtonClicked = (e) => {
    e.preventDefault();
      this.client.send(JSON.stringify({
          type: "message",
          message: this.state.value,
          name: this.state.name
      }));
      this.state.value = ''
      
  }
  componentDidMount() {
    this.client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    this.client.onmessage = (message) => {
      const dataFormServer = JSON.parse(message.data);
      console.log("got reply! ", dataFormServer.type);
      if (dataFormServer) {
        this.setState((state) => ({
          messages: [
            ...state.messages,
            {
              msg: dataFormServer.message,
              name: dataFormServer.name,
            },
          ],
        }));
      }
    };
  }
  render() {
    const { classes } = this.props;
    return (
        <section id="chat">
<Container component="main" maxWidth="xs">
        {this.state.isLoggedIn ? (
          <div className="t1" style={{ marginTop: 50 }}>
            <b>Room Name: {this.state.room}</b>
            <Paper
              style={{
                height: 500,
                maxHeight: 500,
                overflow: "auto",
                boxShadow: "none",
              }}
            >
              {this.state.messages.map((message) => (
                <>
                  <Card className={classes.root}>
                    <CardHeader
                      avatar={<Avatar className={classes.avatar}>R</Avatar>}
                      title={message.name}
                      subheader={message.msg}
                    />
                  </Card>
                </>
              ))}
            </Paper>
            <form
              className={classes.form}
              onSubmit={this.onButtonClicked}
            >
              <TextField
                id="outlined-helperText"
                placeholder="Make a comment"
                defaultValue="Default Value"
                variant="outlined"
                value={this.state.value}
                fullWidth
                required
                onChange={(e) => {
                  this.setState({ value: e.target.value });
                  this.value = this.state.value;
                }}
              />
              <hr></hr>
              <button className="btn" type="submit">
                Start Chatting
              </button>
            </form>
          </div>
        ) : (
          <div>
            <CssBaseline />
            <div className={classes.paper}>
            <div className="form-title">
            <h1 className="form-h1">
              <b>Recycle Chatty Rooms</b>
            </h1>
          </div>
              <form
                className={classes.form}
                onSubmit={(value) => this.setState({ isLoggedIn: true })}
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  className="t1"
                  required
                  fullWidth
                  id="email"
                  placeholder="Chatroom Name"
                  name="Chatroom Name"
                  autoFocus
                  value={this.state.room}
                  onChange={(e) => {
                    this.setState({ room: e.target.value });
                    this.value = this.state.room;
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Username"
                  placeholder="UserName"
                  type="Username"
                  id="Username"
                  value={this.state.name}
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                    this.value = this.state.name;
                  }}
                />
                <button className="btn" type="submit">
                Start Chatting
              </button>
                
              </form>
            </div>
          </div>
        )}
      </Container>
        </section>
      
    );
  }
}
export default withStyles(useStyles)(LiveChat);
