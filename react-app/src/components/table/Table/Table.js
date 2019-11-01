import React from "react";
import "./Table.scss";
import Cell from "./Cell/Cell";
import {Button} from "semantic-ui-react";

function Table({table, tableName, isLoading}) {

    const renderTable = () => {
        if (isLoading === true) return null;
        else {

            let dates = table.dates.map(x  => {
                let y = new Date(x.date);

                return (
                        <td className="date-name" key={x.date}>
                            <p>{y.toLocaleDateString()}</p>
                        </td>
                );
            });

            let daysNumbers = table.dates.map((x, index) => <td key={index}>{index + 1}</td>)

            let cells = table.persons.map(user => {
                let values = table.dates.map(value => {
                    let r = value.values.findIndex(item => item.personId === user.id);
                    if (r === -1)
                        return (
                            <Cell
                                key={Math.random()}
                                tableName={tableName}
                                date={value.date}
                                personId={user.id}
                                user={user}
                            />
                        );
                    else
                        return (
                            <Cell
                                key={value.values[r]._id}
                                tableName={tableName}
                                valueId={value.values[r]._id}
                                content={value.values[r].data.value}
                                color={value.values[r].data.color}
                                date={value.date}
                                user={user}
                            />
                        );
                });
                return (
                    <tr key={user.id}>
                        <td className="fixed">{user.role}</td>
                        <td>{user.name}</td>
                        {values}
                    </tr>
                );
            });

            return (
                <React.Fragment>
                    <thead>
                    <tr>
                        <td rowSpan={2}>Вид деятельности</td>
                        <td rowSpan={2}>Ответственный</td>
                        {dates}
                    </tr>
                    <tr>
                      {daysNumbers}
                    </tr>
                    </thead>
                    <tbody>{cells}</tbody>
                </React.Fragment>
            );
        }
    };

    return (
        <React.Fragment>
            <div className="table-container">
                <table className="table">{renderTable()}</table>
            </div>
            <Button color='green'>Добавить строку</Button>
        </React.Fragment>
    );
}

export default Table;