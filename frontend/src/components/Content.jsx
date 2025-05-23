import AccountDetails from "./Section/AccountDetails";
import InsertMail from "./Section/InsertMail";
import TodoList from "./Section/TodoList";
import Pickups from "./Section/Pickups";
import DocumentApproval from "./Section/DocumentApproval";
import RecipientAdmin from "./Section/RecipientAdmin";
import OrderAdmin from "./Section/OrderAdmin";
import Reports from "./Section/Reports";
import Support from "./Section/Support";
import Payments from "./Section/Payments";

function Content() {
    const className = {
        headerStyle:
            "flex flex-row w-full items-center justify-between bg-[#004E91] px-4 py-2 rounded-t-lg font-semibold text-xl text-white",
        bodyStyle:
            "flex flex-row justify-between rounded-b-lg bg-white px-3 py-6 tracking-tight",
    };

    return (
        <main className="mx-auto min-h-screen bg-[#EEEEEE] px-5 py-10 md:px-10 md:py-20 lg:px-10 lg:py-20 xl:px-20 xl:py-20 2xl:px-80 2xl:py-20">
            <AccountDetails />
            <div className="my-10 grid h-full grid-cols-1 gap-15 md:grid-cols-2">
                <div className="h-full">
                    <InsertMail
                        headerStyle={className.headerStyle}
                        bodyStyle={className.bodyStyle}
                    />
                </div>
                <div className="h-full">
                    <TodoList headerStyle={className.headerStyle} />
                </div>
                <div className="h-full">
                    <Pickups headerStyle={className.headerStyle} />
                </div>
                <div className="h-full">
                    <DocumentApproval
                        headerStyle={className.headerStyle}
                        bodyStyle={className.bodyStyle}
                    />
                </div>
                <div className="h-full">
                    <RecipientAdmin
                        headerStyle={className.headerStyle}
                        bodyStyle={className.bodyStyle}
                    />
                </div>
                <div className="h-full">
                    <OrderAdmin headerStyle={className.headerStyle} />
                </div>
                <div className="h-full">
                    <Reports headerStyle={className.headerStyle} />
                </div>
                <div className="h-full">
                    <Support headerStyle={className.headerStyle} />
                </div>
            </div>
            <Payments />
        </main>
    );
}

export default Content;
