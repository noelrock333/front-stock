import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'

export const ProductsList = () => {
    return (
        <section className="p-5">
            <h1 className="title">Tabla de productos</h1>
            <table className="table" width="100%">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <Link to="/delete">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>
                            </Link>
                            <Link to="/update">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faPencil} />
                                </span>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                            <Link to="/delete">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>
                            </Link>
                            <Link to="/update">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faPencil} />
                                </span>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>
                            <Link to="/delete">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>
                            </Link>
                            <Link to="/update">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faPencil} />
                                </span>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}