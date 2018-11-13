<template>
    <div>
        <div class="container">
            <h1>Websocket chat </h1>
            <messages-list :messages="messages" />
            <message-form />
        </div>
        <conection-status :isConnected="isConnected" />
    </div>
</template>

<script>
import ConectionStatus from './ConectionStatus'
import MessagesList from './MessagesList'
import MessageForm from './MessageForm'

export default {
    name: 'WebsocketTutorial',
    components: {
        ConectionStatus,
        MessagesList,
        MessageForm
    },
    data () {
        return {
            isConnected: false,
            messages: [
                {
                    id: 1,
                    username: 'Paul',
                    message: 'Hey!',
                },
                {
                    id: 2,
                    username: 'Evan',
                    message: 'How are you?',
                },
            ],
        };
    },
    sockets: {
        connect () {
            this.isConnected = true;
        },
        disconnect () {
            this.isConnected = false;
        },
        chatMessage (messages) {
            this.messages = messages;
        }
    }
}

</script>

<style scoped>
.container {
  width: 300px;
  margin: 0 auto;
}
</style>
