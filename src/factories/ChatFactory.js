'use strict';

const PrivateChat = require('../structures/PrivateChat');
const GroupChat = require('../structures/GroupChat');

class ChatFactory {
    static create(client, data) {
        // data.isGroup não existe mais no objeto do chat.
        // Verificando se é um grupo pelo atributor groupMetadata
        if (data.groupMetadata) {
            return new GroupChat(client, data);
        }

        return new PrivateChat(client, data);
    }
}

module.exports = ChatFactory;
