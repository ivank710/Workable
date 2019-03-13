# Workable

[Workable-Live Site]

Workable is a personalized job searching app designed to provide users relevant listings based on their resume. Users have the option of filtering job results based on city once they login. However, the main feature of this app is allowing users to upload their resume and providing relevant search results by making API calls based on keywords found in their resume.

![Screen Shot 2019-03-13 at 10 15 43 AM](https://user-images.githubusercontent.com/42259148/54299895-0e03cc00-4579-11e9-8808-4f70db01c285.png)

## Technologies Used
* Javascript
* React/Redux
* Node
* MongoDB
* Express


## Highlighted Features 

### Search Functionality 

One key functionality for this app was for users to select a specific location while looking for jobs. The goal was to use an external api to pull data based on the users input. In order to implement this, we created a thunk action creator that uses an API call to our backend route which will make the external API call based on the given parameters. 

API call to the backend.
```
export const getJobs = (location) => {
    
    return axios({
        url: `/api/jobs/${location}`,
        method: 'get',
        
    });
};

```
Backend route that fetches data
```

router.get('/:location', (req, res) => {
    let location = req.params.location;
    let url = `https://jobs.github.com/positions.json?location=${location}`;

        https.get(url, jobs => {
            jobs.setEncoding("utf8");
            let body = "";
            jobs.on("data", data => {
                body += data;
            });
            jobs.on("end", () => {
                body = JSON.parse(body);
                res.send(body) 
            });
        });
});

```

### Resume Keyword Parser

