in vec2 texCoord;
out vec4 fragColor;
uniform sampler2D texture0;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform sampler2D texture3;
uniform vec4 color;// = vec4(1.0);
uniform float time;// = 1.0;
uniform float animSpeed;// = 1.0;

void main()
{
    float textureBias = 0.0;
    vec2 coord=texCoord;

    coord.s += (sin(coord.t*18.0 + time*5.0)*0.012)*(coord.t-0.5);
    coord.t += (cos(coord.s*30.0 + time*5.0)*0.015)*(coord.t-0.5);


    float tBias = textureBias + (cos(time*47.0)+1.0)/2.0*1.2;
    vec4 tex1 = texture2D(texture0, coord, tBias);
    vec4 tex2 = texture2D(texture1, coord, tBias);
    vec4 tex3 = texture2D(texture2, coord, tBias);
    vec4 tex4 = texture2D(texture3, coord, tBias);

    float timePos = mod(time * animSpeed, 4.0);
    if (timePos < 1.0) {
        fragColor = mix(tex1, tex2, timePos) * color;
    } else if (timePos < 2.0) {
        fragColor = mix(tex2, tex3, timePos-1.0) * color;
    } else if (timePos < 4.0) {
        fragColor = mix(tex3, tex4, timePos-2.0) * color;
    } else {
        fragColor = mix(tex4, tex1, timePos-3.0) * color;
    }
}
