require('shelljs/global');

if(!watch('git')){
	echo('hello,requires git');
	exit(1);
}