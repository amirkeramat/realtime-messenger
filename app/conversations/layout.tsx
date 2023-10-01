import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
interface ConversationsLayoutProps {
  children: React.ReactNode;
}

const ConversationsLayout: React.FC<ConversationsLayoutProps> = async ({
  children,
}) => {

    const conversations =await getConversations()
    const users = await getUsers()

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList 
        initialItems={conversations}
        users={users}
        />
        {children}
      </div>
    </Sidebar>
  );
};

export default ConversationsLayout;
