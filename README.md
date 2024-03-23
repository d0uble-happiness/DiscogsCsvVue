DiscogsCSV is intended to do the following:

- Take as input a .csv file, the first column of which contains 'release IDs' (integers) pertaining to `https://api.discogs.com/`

- Look up each release ID at `https://api.discogs.com/`. For instance, the data for release ID 42 is accessed at `https://api.discogs.com/releases/42`

- Return as output the same .csv file, with data for the following columns appended:

- release_id
- artist
- format
- qty
- format descriptions
- label
- catno
- country
- year
- genres
- styles
- barcode
- tracklist
