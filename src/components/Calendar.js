import React from 'react';

export function Calendar() {
    return (
        <>
            <div className="calendar">
                <h1 className="month-name">October 2022</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1
                                <p className="water-text">Watered Plants</p>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5
                                <p className="water-text">Watered Plants</p>
                            </td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>9
                                <p className="water-text">Watered Plants</p>
                            </td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14
                                <p className="water-text">Watered Plants</p>
                            </td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>17
                                <p className="water-text">Watered Plants</p>
                            </td>
                            <td>18</td>
                            <td>19</td>
                            <td>20
                                <p className="soil">Changed Soil</p>
                            </td>
                            <td>21
                            </td>
                            <td>22
                                <p className="water-text">Watered Plants</p>
                            </td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>24</td>
                            <td>25
                                <p className="fertilizer">Added Fertilizer</p>
                            </td>
                            <td>26</td>
                            <td>27
                                <p className="water-text">Watered Plants</p>
                            </td>
                            <td>28</td>
                            <td>29</td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td>31
                                <p className="water-text">Watered Plants</p>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="add-event">
                <button className="new-event" aria-label="add event"><a href="calendar.html">+</a></button>
                <p className="button-text">Add New Event</p>
            </div>

            <div className="calendar-Event">
                <div className="card-container">
                    <nav>
                        <h2 className="form-title">Add an Event</h2>
                        <form>
                            <div className="form-item">
                                <label for="event-input">Event Name:</label>
                                <input id="event-input" type="text" name="eventname" />
                            </div>
                            <div className="form-item">
                                <label for="date-input">Date:</label>
                                <input id="date-input" type="date" name="date" />
                            </div>
                            <div className="form-item">
                                <label for="notes-input">Add Notes:</label>
                                <input id="notes-input" type="text" name="addnotes" />
                            </div>
                            <div className="form-item">
                                <label for="attachment-input">Add Attachments:</label>
                                <input id="attachment-input" type="file" name="addattachment" />
                            </div>
                            <div className='form-btn type'>
                                <button type="submit" aria-label="submit">Submit</button>
                                <button type="cancel" aria-label="cancel">Cancel</button>
                            </div>
                        </form>
                    </nav>
                </div>
            </div>
        </>
    );
}