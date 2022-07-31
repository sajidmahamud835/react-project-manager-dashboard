import React from 'react';
import "react-chat-elements/dist/main.css";
import { Button, Input, MessageList } from "react-chat-elements"
import { Card, CardContent, CardHeader, Paper } from '@mui/material';
import { Box } from '@mui/system';

/* Read dcumentation for MessageList:
https://react-chat-elements.github.io/react-chat-elements/components/message-list.html
*/

const ProjectConversation = (props) => {
    const { name, owner, members } = props.data;
    return (
        <div>
            <Card sx={{ marginTop: 2 }}>
                <CardHeader title="Project Conversation" />

                <CardContent>
                    <MessageList
                        className='message-list'
                        lockable={true}
                        toBottomHeight={'100%'}
                        dataSource={[
                            {
                                avatar: owner.avatar,
                                alt: owner.name,
                                position: "left",
                                type: "text",
                                title: owner.name,
                                text: name,
                            },
                            {
                                avatar: members[0].avatar,
                                alt: members[0].name,
                                position: "right",
                                type: "text",
                                title: members[0].name,
                                text: "Cool, I'll do it.",
                            },
                            {
                                avatar: owner.avatar,
                                alt: owner.name,
                                position: "left",
                                type: "text",
                                title: owner.name,
                                text: "Great, I'll let you know.",
                            },
                        ]}
                    />

                    <Paper elevation={2} sx={{ marginTop: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', weight: '50%' }}>
                            <Input
                                placeholder="Type a message..."
                                rightButtons={[
                                    <Button
                                        key="send"
                                        text={"Send"}
                                        icon="send"
                                        onClick={() => {
                                            console.log("send")
                                        }
                                        }
                                    />
                                ]}
                            />
                        </Box>
                    </Paper>
                </CardContent>
            </Card>


        </div >
    );
};

export default ProjectConversation;