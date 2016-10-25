# reactgen-native
Generate React Native component

#### Installation
```sh
npm install reactgen-native -g
```

#### Usage
```sh
reactgen-native <filename> <directory> [option]
```

#### Example
```sh
reactgen-native AwesomeFile awesome -C
```

#### Options:

	-P, --presentational  Create inline function component
	-C, --container       Create class-based component

#### Default Path
You can set your default root path by creating `.env` file in your root directory and add `REACTGEN_DEFAULT_ROOT_PATH="your/path"`